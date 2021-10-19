import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={s.list}>
            {contacts().map(({ id, name, number }) => {
                return (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onDeleteContact={onDeleteContact}
                    />
                );
            })}
        </ul>
    );
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.func.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};