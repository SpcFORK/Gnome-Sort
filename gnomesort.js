// Gnomesort  written the cleanest way.
// SpcFORK  2024

function gnomeSort(arr = [], index = 0) {
  let swap = (x, y) => [arr[x], arr[y]] = [arr[y], arr[x]];
  while (index < arr.length)
    if (index === 0 || arr[index] >= arr[index - 1]) index++;
    else swap(index, index -= 1);
  return arr;
}