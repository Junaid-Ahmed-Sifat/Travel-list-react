export default function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Start Adding some items 🪣</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  // const percentage = Math.round((numPacked / numItems) * 100);
  const percentage =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "🎉 You are ready to go! ✈️"
          : `💼 You have ${numItems} items on your list and you have already packed ${numPacked} and ${percentage.toFixed(
              0
            )}% 👌`}
      </em>
    </footer>
  );
}
