import Example from '../components/Example';
import HooksExample from '../components/HooksExample';
import PizzaForms from '../components/PizzaForm';
import TestForm from '../components/TestForm';

const Demo = () => {
  return (
    <div>
      <h2>Tänne on tulossa HOOKS demo</h2>
      <Example />
      <h3>Hooks Example wsk sivuilta</h3>
      <HooksExample />
      <h3>Form Example</h3>
      <TestForm />
      <PizzaForms />
    </div>
  );
};

export default Demo;
