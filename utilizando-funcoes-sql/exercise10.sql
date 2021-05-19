SELECT JOB_ID, AVG(SALARY), COUNT(*)'Number_of_employees' FROM hr.employees
	GROUP BY DEPARTMENT_ID
    HAVING Number_of_employees > 10;
