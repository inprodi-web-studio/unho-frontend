import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import registerComponent from "@plasmicapp/host/registerComponent";
import esLocale from "@fullcalendar/core/locales/es";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export const Calendar = ({
    events,
    onEventClick,
    showProperties,
}) => {
    
    return (
        <FullCalendar
            nowIndicator
            dayMaxEvents={true}
            eventOrder="duration"
            eventClick={({event}) => {
                const { startStr, endStr, extendedProps } = event;

                onEventClick && onEventClick({ startStr, endStr, extendedProps });
            }}
            height="100%"
            events={events}
            locale={esLocale}
            handleWindowResize
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'multiMonthYear,dayGridMonth,timeGridWeek'
            }}
            eventContent={ (arg) => {
                const { event, view : { type }, isPast } = arg;

                const {
                    status,
                    partner,
                    property,
                    isRented,
                    isSwitched,
                } = event.extendedProps;

                const {
                    image,
                    name,
                    fatherSurname,
                    motherSurname,
                } = partner;

                const {
                    image : propImage,
                    name : propName,
                } = property;

                return (
                    <div style={{
                        padding : type === "multiMonthYear" ? "2px" : "4px",
                        display : "flex",
                        flexDirection : "row",
                        alignItems : "center",
                        gap : type === "multiMonthYear" ? "6px" : "10px"
                    }}>
                        { isSwitched && (
                            <Icon
                                size={16}
                                color={ isPast ? "#bfbfbf" : "#FFFFFF" }
                                variant="bold"
                                icon="Shuffle"
                            />
                        )}

                        { isRented && (
                            <Icon
                                size={16}
                                color={ isPast ? "#bfbfbf" : "#FFFFFF" }
                                variant="bold"
                                icon="CurrencyDollar"
                            />
                        )}

                        <Avatar
                            isCircular
                            size={ type === "multiMonthYear" ? "xxs" : "xs" }
                            type={ image ? "image" : "text" }
                            color={ isPast ? "#8c8c8c" : status === "confirmed" ? "var(--token-vQtdtZUA91Eg)" : "#8c8c8c" }
                            variant="filled"
                            content={ image ? image : name }
                            bordered={false}
                        />

                        <span style={{
                            fontSize : type === "multiMonthYear" ? "10px" : "12px",
                            fontWeight : "500",
                            color : isPast ? "#bfbfbf" : "white",
                        }}>
                            { `${ name } ${ fatherSurname } ${ motherSurname }` }
                        </span>

                        { showProperties && (
                            <>
                                <span>
                                    -
                                </span>
        
                                <Avatar
                                    size={ type === "multiMonthYear" ? "xxs" : "xs" }
                                    type={ propImage ? "image" : "icon" }
                                    color={ isPast ? "#8c8c8c" : "#13c2c2" }
                                    variant="filled"
                                    content={ propImage ? propImage : "Warehouse" }
                                    bordered={false}
                                />
        
                                <span style={{
                                    fontSize : type === "multiMonthYear" ? "10px" : "12px",
                                    fontWeight : "500",
                                    color : isPast ? "#bfbfbf" : "white",
                                }}>
                                    { propName }
                                </span>  
                            </>
                        )}
                    </div>
                )
            }}
            multiMonthMaxColumns={2}
            plugins={[ dayGridPlugin, timeGridPlugin, multiMonthPlugin ]}
            initialView="dayGridMonth"
        />
    );
};

export const calendarMeta = {
    name : "Calendar",
    displayName : "Calendar",
    props : {
        events : {
            type : "array",
            description : "The events to display in the calendar",
            defaultValue : [],
        },
        showProperties : {
            type : "boolean",
            defaultValue : true,
        },
        onEventClick : {
            type : "eventHandler",
            argTypes : [{ name: "event", type: "object" }],
        },
    },
    importPath: "/components/Calendar.jsx",
    importName: "Calendar",
};

export function registerCalendar(
    loader,
    customCalendarMeta
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(Calendar, customCalendarMeta ?? calendarMeta);
}