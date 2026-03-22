export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
};

export const education: Education[] = [
  {
    school: "Faculte des Sciences et Techniques de Gueliz — Universite Cadi Ayyad",
    degree: "Licence",
    field: "Systemes Informatiques Repartis",
    location: "Marrakech",
    start: "2022",
    end: "2025"
  },
  {
    school: "Faculte des Sciences et Techniques de Gueliz — Universite Cadi Ayyad",
    degree: "DEUST",
    field: "Mathematiques, Informatique, Physique, Chimie",
    location: "Marrakech",
    start: "2022",
    end: "2025"
  },
  {
    school: "Lycee Ibn Soulaiman Roudani",
    degree: "Baccalaureat",
    field: "Sciences Mathematiques B",
    location: "Taroudant",
    start: "2020",
    end: "2021"
  }
];