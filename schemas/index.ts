import * as z from "zod";

export const TaskSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Task name is required at least 3 characters" })
    .nonempty("Task name is required"),
  memberId: z
    .string()
    .min(3, { message: "Member ID is required" })
    .nonempty({ message: "Member ID is required" }),
});
export type TaskType = z.infer<typeof TaskSchema>;
