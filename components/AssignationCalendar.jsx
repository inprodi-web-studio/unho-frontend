import React, { forwardRef, useImperativeHandle, useRef } from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import registerComponent from "@plasmicapp/host/registerComponent";
import esLocale from "@fullcalendar/core/locales/es";
import { Avatar } from "./Avatar";

export const AssignationCalendar = forwardRef(({ events, minDate, maxDate, onEventClick }, ref) => {
    const calendarRef = useRef(null);

    useImperativeHandle(ref, () => ({
        addEvent: (event) => {
            if (calendarRef.current) {
              calendarRef.current.getApi().addEvent(event);
            }
        },
        getEvents : () => {
            if (calendarRef.current) {
              console.log(calendarRef.current.getApi().getEvents());
              return calendarRef.current.getApi().getEvents();
            }
            return [];
        },
        removeEvent : (event) => {
            if (calendarRef.current) {
              calendarRef.current.getApi().getEventById(event.id).remove();
            }
        }
    }));

    return (
      <FullCalendar
        ref={calendarRef}
        handleWindowResize
        validRange={{ start: minDate, end: maxDate }}
        eventClick={({ event }) => {
          const { startStr, endStr, extendedProps, id } = event;
          onEventClick && onEventClick({ startStr, endStr, extendedProps, id });
        }}
        height="100%"
        initialEvents={events}
        locale={esLocale}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "multiMonthYear,dayGridMonth,timeGridWeek"
        }}
        eventContent={(arg) => {
          const { event, view: { type }, isPast } = arg;
          const { status, partner } = event.extendedProps;
          const { image, name, fatherSurname, motherSurname } = partner;

          return (
            <div style={{
              padding: type === "multiMonthYear" ? "2px" : "4px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: type === "multiMonthYear" ? "6px" : "10px"
            }}>
              <Avatar
                isCircular
                size={type === "multiMonthYear" ? "xxs" : "xs"}
                type={image ? "image" : "text"}
                color={isPast ? "#8c8c8c" : status === "confirmed" ? "var(--token-vQtdtZUA91Eg)" : "#8c8c8c"}
                variant="filled"
                content={image ? image : name}
                bordered={false}
              />
              <span style={{
                fontSize: type === "multiMonthYear" ? "10px" : "12px",
                fontWeight: "500",
                color: isPast ? "#bfbfbf" : "white",
              }}>
                {name} {fatherSurname} {motherSurname}
              </span>
            </div>
          );
        }}
        multiMonthMaxColumns={2}
        plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin]}
        initialView="dayGridMonth"
      />
    );
});

AssignationCalendar.displayName = "AssignationCalendar";

export const assignationCalendarMeta = {
    name : "AssignationCalendar",
    displayName : "Assignation Calendar",
    props : {
        events : {
            type : "array",
            description : "The events to display in the calendar",
            defaultValue : [],
        },
        minDate : {
            type : "string",
            description : "The minimum date to display in the calendar",
            defaultValue : "",
        },
        maxDate : {
            type : "string",
            description : "The maximum date to display in the calendar",
            defaultValue : "",
        },
        showProperties : {
            type : "boolean",
            defaultValue : true,
        },
        onEventClick : {
            type : "eventHandler",
            argTypes : [{ name: "event", type: "object" }],
        },
        onChange : {
            type : "eventHandler",
            argTypes : [],
        },
    },
    refActions : {
        addEvent : {
            argTypes : [{ name: "event", type: "object" }],
        },
        getEvents : {
            argTypes : [],
        },
        removeEvent : {
            argTypes : [{ name: "event", type: "object" }],
        }
    },
    importPath: "/components/AssignationCalendar.jsx",
    importName: "AssignationCalendar",
};

export function registerAssignationCalendar(
    loader,
    customAssignationCalendarrMeta
) {
    const doRegisterComponent = (...args) =>
        loader ? loader.registerComponent(...args) : registerComponent(...args);
    doRegisterComponent(AssignationCalendar, customAssignationCalendarrMeta ?? assignationCalendarMeta);
}