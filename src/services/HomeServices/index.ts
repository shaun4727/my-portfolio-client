'use server';

export const getHeroSectionDataApi = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/home/hero-section-list`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getSkillSectionDataApi = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/home/skill-section-list`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
export const getExperienceSectionDataApi = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/home/create-experience`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
