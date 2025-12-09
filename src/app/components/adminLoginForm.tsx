import { Form, Input, Button } from "@heroui/react";

export default function AdminLoginForm() {
  return (
    <>
      <Form className="w-full max-w-md space-y-4 rounded-lg bg-white p-6">
        <Input
          isRequired
          label="User name or Mail"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your User name or Mail"
        />

        <Input
          isRequired
          label="Password"
          labelPlacement="outside"
          name="password"
          placeholder="Enter your Password"
          type="password"
        />

        <Button className="w-full" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}