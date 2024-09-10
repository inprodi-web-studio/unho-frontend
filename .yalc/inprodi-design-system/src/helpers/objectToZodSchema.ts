import { z } from "zod";

const objectToZodSchema = (object: {}) => {
    const schemaEntries = Object.entries(object).map(([key, value]) => {
        const evalFunc = new Function('z', `return ${value};`);
        return [key, evalFunc(z)];
      });
    
      return z.object(Object.fromEntries(schemaEntries));
};

export default objectToZodSchema;