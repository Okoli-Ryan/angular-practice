
export function CalculateDateDifference(targetDate: { day: number, month: number, year: number }) {

    try {
  
      const currentDate = new Date();
      const target = new Date(targetDate.year, targetDate.month - 1, targetDate.day); // Month is 0-based
  
      const timeDifference = currentDate.getTime() - target.getTime();
      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
      const currentYear = currentDate.getFullYear();
      const targetYear = target.getFullYear();
  
      const years = currentYear - targetYear;
      const months = (currentDate.getMonth() + 1) - targetDate.month; // Month is 0-based
  
      const remainingDaysInCurrentMonth = daysDifference - (years * 365 + months * 30);
  
      return {
        years,
        months,
        days: Math.floor(remainingDaysInCurrentMonth)
      };
    } catch (e) {
      console.log(e)
      return { years: 0, months: 0, days: 0 };
    }
  }
  
  