export const getItemsData = () => {
  return new Promise((resolve) => {
    setTimeout(
      resolve({
        data: [
          {
            id: 1,
            name: "Item 1",
            category: "Category 1",
            subcategory: "Subcategory A",
          },
          {
            id: 2,
            name: "Item 2",
            category: "Category 2",
            subcategory: "Subcategory B",
          },
          {
            id: 3,
            name: "Item 3",
            category: "Category 1",
            subcategory: "Subcategory C",
          },
          {
            id: 4,
            name: "Item 4",
            category: "Category 3",
            subcategory: "Subcategory A",
          },
          {
            id: 5,
            name: "Item 5",
            category: "Category 4",
            subcategory: "Subcategory B",
          },
          {
            id: 6,
            name: "Item 6",
            category: "Category 1",
            subcategory: "Subcategory D",
          },
          {
            id: 7,
            name: "Item 7",
            category: "Category 2",
            subcategory: "Subcategory A",
          },
          {
            id: 8,
            name: "Item 8",
            category: "Category 3",
            subcategory: "Subcategory B",
          },
          {
            id: 9,
            name: "Item 9",
            category: "Category 4",
            subcategory: "Subcategory C",
          },
          {
            id: 10,
            name: "Item 10",
            category: "Category 4",
            subcategory: "Subcategory A",
          },
          {
            id: 11,
            name: "Item 11",
            category: "Category 2",
            subcategory: "Subcategory C",
          },
          {
            id: 12,
            name: "Item 12",
            category: "Category 3",
            subcategory: "Subcategory D",
          },
          {
            id: 13,
            name: "Item 13",
            category: "Category 1",
            subcategory: "Subcategory B",
          },
          {
            id: 14,
            name: "Item 14",
            category: "Category 3",
            subcategory: "Subcategory C",
          },
          {
            id: 15,
            name: "Item 15",
            category: "Category 2",
            subcategory: "Subcategory D",
          },
          {
            id: 16,
            name: "Item 16",
            category: "Category 4",
            subcategory: "Subcategory D",
          },
        ],
      }),
      Math.random() * 1000
    );
  });
};
