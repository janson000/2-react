const name = 'Jesse';
const age = 40;

export { name, age };

export default function Name() {
  return (
    <div>
      <h1>Jesse</h1>
    </div>
  );
}

export default function Age() {
  return (
    <div>
      <h1>40</h1>
    </div>
  );
}
