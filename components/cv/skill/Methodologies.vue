<template>
  <div>
    <CvSkillTemplate title="Principles" :elements="languages" />
  </div>
</template>

<script>
export default {
  data()  {
    return {
      languages: [
        {name: "Clean code", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Lean", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Scrum", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Kanbam", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Agile", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "GTD", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
      ],
    }
  }


};
</script>
