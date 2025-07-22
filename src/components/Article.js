 function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {renderMinutes(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

function renderMinutes(minutes) {
  if (!minutes) return null;
  
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    return `${"☕️".repeat(cups)} ${minutes} min read`;
  } else {
    const boxes = Math.ceil(minutes / 10);
    return `${"🍱".repeat(boxes)} ${minutes} min read`;
  }
}

export default Article;