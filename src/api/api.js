import data from "../../data.json";

export async function getShirts() {
  return data;
}

export async function getShirtsByName(search) {
  const shirts = data.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );
  return shirts;
}

export async function getById(id) {
  const shirt = data.find((s) => s.id == id);
  if (!shirt) {
    return { error: { message: "Camisa não encontrada." } };
  }
  return shirt;
}

export async function getShirtsByFilter({ name, price, color, size }) {
  const shirts = data.filter((s) => {
    let match = true;
    if (name && !s.title.toLowerCase().includes(name.toLowerCase())) {
      match = false;
    }
    if (price && s.price > price) {
      match = false;
    }
    if (color && !s.colors.includes(color)) {
      match = false;
    }
    if (size && !s.sizes.includes(size)) {
      match = false;
    }
    return match;
  });

  return shirts;
}
