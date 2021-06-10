import React from "react";
import ContactsListItem from "../ContactsListItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul style={{ padding: "0px" }}>
        <ContactsListItem items={contacts} onDeleteContact={onDeleteContact} />
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
