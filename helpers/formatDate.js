import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/es-mx";

dayjs.extend( localizedFormat );

const formatDate = (date, format) => {
    return dayjs(date).locale( "es-mx" ).format( format );
}

export default formatDate;