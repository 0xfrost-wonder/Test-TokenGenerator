import * as z from "zod";

export const tokenSchema = z.object({
  tokenName: z
    .string()
    .min(3, { message: "Token Name must be at least 3 characters" }),
  tokenSymbol: z
    .string()
    .min(3, { message: "Token Symbol must be at least 3 characters" }),
  tokenInitsupply: z.coerce.number().min(21000000, {
    message: "Initial supply must be at least greater than 21000000.",
  }),
  maxSupply: z.coerce.number().min(21000000, {
    message: "Max supply must be at least greater than 21000000.",
  }),
  buyTaxfee: z.coerce
    .number()
    .max(3, {
      message: "Total supply must be at least less than 3%.",
    })
    .min(0, {
      message: "Initial supply must be at least greater than 0.",
    }),
  sellTaxfee: z.coerce
    .number()
    .max(3, {
      message: "Total supply must be at least less than 3%.",
    })
    .min(0, {
      message: "Initial supply must be at least greater than 0.",
    }),
  liqidityShare: z.coerce.number().max(100, {
    message: "Initial supply must be at least greater than 100%.",
  }),
  teamShare: z.coerce.number().max(100, {
    message: "Initial supply must be at least greater than 100%.",
  }),
  tokenDecimals: z.coerce
    .number()
    .max(18, { message: "Initial supply must be at least greater than 18." }),
});

export type TokenFormValues = z.infer<typeof tokenSchema>;
