import { Contacts } from 'components/Contacts/Contacs';
import { FindFilt } from 'components/Filter/Filter';
import { Form } from 'components/ContactForm/ContactForm';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Form />
      <FindFilt />
      <Contacts />
    </div>
  );
};
