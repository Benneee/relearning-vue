import { ref, computed, watch } from 'vue';

export function useSearch(items, searchProp) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  watch(enteredSearchTerm, (newValue) => {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items) {
      filteredItems = items;
    }
    return filteredItems;
  });

  return {
    enteredSearchTerm,
    updateSearch,
    availableItems,
  };
}
