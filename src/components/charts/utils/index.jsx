// Utils.js

const Utils = {
    months: ({ count }) => {
      const currentDate = new Date();
      const months = [];
      
      for (let i = 0; i < count; i++) {
        currentDate.setMonth(currentDate.getMonth() - 1);
        const monthName = currentDate.toLocaleString('default', { month: 'long' });
        months.push(monthName);
      }
      
      return months.reverse();
    },
  };
  
  export default Utils;
  