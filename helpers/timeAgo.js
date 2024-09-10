import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/es-mx";

dayjs.extend( localizedFormat );
dayjs.extend( relativeTime );

const timeAgo = (date) => {
    return dayjs(date).locale("es-mx").toNow(true);
}

export default timeAgo;