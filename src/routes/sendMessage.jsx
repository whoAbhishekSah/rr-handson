import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export default function SendMessage() {
  const { contact } = useLoaderData();
  return (
    <Form method="post" id="message-form">
      <label>
        <p>Your message to {contact.first} </p>
        <textarea name="text_message" rows={4} cols={100}/>
      </label>
      <p>
        <button type="submit">Send</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
