import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es-mx";

dayjs.extend( localizedFormat );

const createDayJsObject = (date) => {

    if (date) {
        return dayjs(date).locale( "es-mx" );
    }

    return dayjs().locale("es-mx");
}

export default createDayJsObject;