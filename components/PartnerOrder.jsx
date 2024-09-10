import registerComponent from "@plasmicapp/host/registerComponent";
import { DndContext, closestCenter, useSensors, PointerSensor, KeyboardSensor, useSensor } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { Avatar } from "./Avatar";
import parseName from "@/helpers/parseName";

const DraggableItem = ({ id, partner }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id,
    });
    
    const mainContainerStyle = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: "10px",
        marginBottom: "6px",
        backgroundColor: "white",
        borderRadius: "6px",
        cursor: "grab",
        border: "solid 1px #d9d9d9",
        display: "flex",
        alignItems: "center",
        gap: "10px",
    };

    const textStyle = {
        fontWeight : 500,
        fontSize : "14px",
        color : "black"
    };
    
    return (
        <div ref={setNodeRef} style={mainContainerStyle} {...attributes} {...listeners}>
            <Avatar
                isCircular
                size="sm"
                type={ partner.image ? "image" : "text" }
                color="#328BE6"
                variant="filled"
                content={ partner.image ? partner.image : partner.name }
            />
            <span style={textStyle}>{ parseName( partner ) }</span>
        </div>
    );
};

export const PartnerOrder = ({
    onOrder,
    partners,
}) => {
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor( PointerSensor, {
            activationConstraint: {
                distance: 10,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };
  
    const handleDragEnd = (event) => {
        const { active, over } = event;

        // console.log( event );
    
        if (over && active.id !== over.id) {
            const oldIndex = partners.findIndex(p => p.partner.uuid === active.id);
            const newIndex = partners.findIndex(p => p.partner.uuid === over.id);
    
            if (oldIndex !== -1 && newIndex !== -1) {
                const newPartners = arrayMove(partners, oldIndex, newIndex);
    
                onOrder(newPartners);
            }
        }
    };
    

    const partnerUUIDs = partners.map(p => p.partner.uuid);
    
    return (
        <DndContext
            sensors={sensors}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            collisionDetection={closestCenter}
        >
            <SortableContext items={partnerUUIDs} strategy={verticalListSortingStrategy}>
                {partners.map((item) => (
                    <DraggableItem key={item.partner.uuid} id={item.partner.uuid} partner={item.partner} />
                ))}
            </SortableContext>
        </DndContext>
    );
};

export const partnerOrderMeta = {
    name : "PartnerOrder",
    displayName : "Partner Order",
    states : {
        partners : {
            type : "writable",
            variableType : "array",
            valueProp : "partners",
            onChangeProp : "onOrder",
        },
    },
    props : {
        partners : {
            type : "array",
            description : "The partners to display in the list",
            defaultValue : [],
        },
        onOrder : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    importPath: "/components/PartnerOrder.jsx",
    importName: "PartnerOrder",
};

export function registerPartnerOrder(
    loader,
    customPartnerOrderMeta
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(PartnerOrder, customPartnerOrderMeta ?? partnerOrderMeta);
}