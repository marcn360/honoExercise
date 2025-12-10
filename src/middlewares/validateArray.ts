//      DISREGARD!!!!!!!!


// import { plainToClass } from "class-transformer";
// import { validate } from "class-validator";
// import { MiddlewareHandler } from "hono";

// export const validateArray = (dtoClass: any): MiddlewareHandler => {
//   return async (c, next) => {
//     try {
//       const rawBody= c.req.json()
//       if (!Array.isArray(rawBody)) {
//         return c.json({ 
//           success: false, 
//           message: 'Expected request body to be an array of objects.' 
//         }, 400);
//       }

//       const dtoInstances = rawBody.map(value=>plainToClass(dtoClass,value))
//       const validationPromises = dtoInstances.map(value =>validate(value))
//       const validationResults = await Promise.all(validationPromises);

//       const allErrors: any[] = [];
//       validationResults.forEach((errors, index) => {
//         if (errors.length > 0) {
//           errors.forEach(error => {
//             // Map validation errors to a readable format
//             allErrors.push({
//               index: index, // The position in the array
//               field: error.property,
//               constraints: error.constraints,
//             });
//           });
//         }
//       });
      
//       // 4. Handle validation failure
//       if (allErrors.length > 0) {
//         return c.json({ 
//           success: false, 
//           message: 'Validation failed for one or more items in the array.', 
//           errors: allErrors 
//         }, 400);
//       }

//       await next();

//     } catch (error) {
//       return c.json({ success: false, message: 'Invalid request format.' }, 400);
//     }
//   }
// }

