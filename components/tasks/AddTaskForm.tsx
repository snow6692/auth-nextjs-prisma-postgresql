"use client";

import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { TaskType, TaskSchema } from "@/schemas/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { addTaskAction } from "@/app/actions/taskAction";
import { toast } from "sonner";
import Image from "next/image";

type FamilyMember = {
  id: string;
  name: string | null;
  image: string | null;
};
function AddTaskForm({ familyMembers }: { familyMembers: FamilyMember[] }) {
  const form = useForm<TaskType>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      name: "",
      memberId: "",
    },
  });
  const onSubmit = (values: TaskType) => {
    addTaskAction(values)
      .then(() => {
        toast.success("Task added ");
        form.reset({ memberId: " ", name: "" });
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task name</FormLabel>
              <FormControl>
                <Input placeholder="Task name" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="memberId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assign to Family Member</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value} // Set the current value
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a family member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Family Members</SelectLabel>
                      {familyMembers.map((member) => (
                        <SelectItem key={member.id} value={member.id}>
                          <div className=" flex  items-center justify-center gap-2">
                            {member.name}
                            {member.image && member.name && (
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={20}
                                height={20}
                                className="rounded-full"
                              />
                            )}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={form.formState.isLoading}
          className=" disabled:bg-slat-600"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default AddTaskForm;
