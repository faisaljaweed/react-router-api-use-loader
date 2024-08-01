import { Params, useLoaderData } from "react-router-dom";
import { getContactbyId } from "../api/api";
type LoaderArgs = {
  params: Params<string>;
};
export const ContactDetailLoader = async ({ params }: LoaderArgs) => {
  const { contactId } = params;
  if (!contactId) {
    throw new Error("contactId is required");
  }

  const contactDetails = await getContactbyId(contactId);
  if (!contactDetails) {
    throw new Error("contact not found");
  }
  return { contactDetails };
};

const ContactDetailPage = () => {
  const { contactDetails } = useLoaderData() as Awaited<
    ReturnType<typeof ContactDetailLoader>
  >;
  return (
    <>
      <h1>
        {contactDetails?.name.first} {contactDetails?.name.last}
      </h1>
      <p>{contactDetails?.email}</p>
    </>
  );
};

export default ContactDetailPage;
