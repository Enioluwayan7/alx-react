export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key) => acc && acc[key], object);
}

// Example usage:
const result = accessImmutableObject(
    {
        name: {
            first: "Guillaume",
            last: "Salva"
        }
    },
    ['name', 'first']
);
console.log(result); // Output: Guillaume
