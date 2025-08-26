import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import registerComponent from "@plasmicapp/host/registerComponent";
import esLocale from "@fullcalendar/core/locales/es";
import { Avatar } from "./Avatar";
import { Icon } from "./Icon";

export const Calendar = ({ events, onEventClick, showProperties }) => {
  const getEventClassNames = (arg) => {
    const { status, isForRent } = arg.event.extendedProps;

    if (status === "CONFIRMED") {
      return ["event-status-confirmed"];
    } else if (status ==="CANCELED") {
      return ["event-status-cancelled"];
    } else if (isForRent) {
      return ["event-status-for-rent"];
    } else if (status) {
      return [`event-status-${status.toLowerCase()}`];
    }

    return ["event-status-default"];
  };

  return (
    <div className="calendar-container" style={{ height: "100%" }}>
      <style>
        {`
          .event-status-confirmed {
            background-color: #52C41A !important;
            border-color: #52C41A !important;
          }
          .event-status-pending {
            background-color: #BFBFBF !important;
            border-color: #BFBFBF !important;
          }
          .event-status-cancelled {
            background-color: #F5222D !important;
            border-color: #F5222D !important;
          }
          .event-status-default {
            background-color: #BFBFBF !important;
            border-color: #BFBFBF !important;
          }
          .event-status-for-rent {
            background-color: #1677ff !important;
            border-color: #1677ff !important;
          }
          .fc-event {
            border: none !important;
          }
        `}
      </style>
      <FullCalendar
        nowIndicator
        handleWindowResize
        dayMaxEvents={true}
        eventOrder="duration"
        eventClassNames={getEventClassNames}
        eventClick={({ event }) => {
          const { startStr, endStr, extendedProps } = event;
          onEventClick && onEventClick({ startStr, endStr, extendedProps });
        }}
        height="100%"
        events={events}
        locale={esLocale}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "multiMonthYear,dayGridMonth,timeGridWeek",
        }}
        eventContent={(arg) => {
          const {
            event,
            view: { type },
          } = arg;

          const { status, partner, property, isRented, isSwitched, isForRent } =
            event.extendedProps;

          const { image, name, fatherSurname, motherSurname } = partner;
          const { image: propImage, name: propName } = property;

          return (
            <div
              style={{
                padding: type === "multiMonthYear" ? "2px" : "4px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: type === "multiMonthYear" ? "6px" : "10px",
                color: "white",
                borderRadius: "4px",
              }}
            >
              {isSwitched && (
                <Icon
                  size={16}
                  color={"#FFFFFF"}
                  variant="bold"
                  icon="Shuffle"
                />
              )}

              {isRented && (
                <Icon
                  size={16}
                  color={"#FFFFFF"}
                  variant="bold"
                  icon="CurrencyDollar"
                />
              )}

              <Avatar
                isCircular
                size={type === "multiMonthYear" ? "xxs" : "xs"}
                type={image ? "image" : "text"}
                color={
                  status === "CONFIRMED"
                    ? "#53C41B"
                    : "#8c8c8c"
                }
                variant="filled"
                content={image ? image : name}
                bordered={false}
              />

              <span
                style={{
                  fontSize: type === "multiMonthYear" ? "10px" : "12px",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                {`${name} ${fatherSurname} ${motherSurname}`}
              </span>

              {showProperties && (
                <>
                  <span>-</span>

                  <Avatar
                    size={type === "multiMonthYear" ? "xxs" : "xs"}
                    type={propImage ? "image" : "icon"}
                    color={"#13c2c2"}
                    variant="filled"
                    content={propImage ? propImage : "Warehouse"}
                    bordered={false}
                  />

                  <span
                    style={{
                      fontSize: type === "multiMonthYear" ? "10px" : "12px",
                      fontWeight: "500",
                      color: "white",
                    }}
                  >
                    {propName}
                  </span>
                </>
              )}
            </div>
          );
        }}
        multiMonthMaxColumns={2}
        plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};

export const calendarMeta = {
  name: "Calendar",
  displayName: "Calendar",
  props: {
    events: {
      type: "array",
      description: "The events to display in the calendar",
      defaultValue: [],
    },
    showProperties: {
      type: "boolean",
      defaultValue: true,
    },
    onEventClick: {
      type: "eventHandler",
      argTypes: [{ name: "event", type: "object" }],
    },
  },
  importPath: "/components/Calendar.jsx",
  importName: "Calendar",
};

export function registerCalendar(loader, customCalendarMeta) {
  const doRegisterComponent = (...args) =>
    loader ? loader.registerComponent(...args) : registerComponent(...args);
  doRegisterComponent(Calendar, customCalendarMeta ?? calendarMeta);
}
