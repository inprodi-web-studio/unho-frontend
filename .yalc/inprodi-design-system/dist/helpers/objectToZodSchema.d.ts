import { z } from "zod";
declare const objectToZodSchema: (object: {}) => z.ZodObject<any, "strip", z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}>;
export default objectToZodSchema;
