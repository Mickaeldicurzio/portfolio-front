var truncate = function(text: string, length: number, clamp: string) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content!.length > length ? content!.slice(0, length) + clamp : content;
};

export default truncate;
