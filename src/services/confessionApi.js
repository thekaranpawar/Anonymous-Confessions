// //  Get all confessions

// export const getConfessions = async () => {
//   try {
//     const res = await API.get("/confessions");
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching confessions:", error);
//     return [];
//   }
// };

// //   Create confession

// export const createConfession = async (confessionData) => {
//   try {
//     const res = await API.post("/confessions", confessionData);
//     return res.data;
//   } catch (error) {
//     console.error("Error creating confession:", error);
//     return null;
//   }
// };

// //  Like confession

// export const likeConfession = async (id) => {
//   try {
//     const res = await API.patch(`/confessions/${id}/like`);
//     return res.data;
//   } catch (error) {
//     console.error("Error liking confession:", error);
//     return null;
//   }
// };
