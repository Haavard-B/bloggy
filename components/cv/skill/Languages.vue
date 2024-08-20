<template>
  <div>
    <CvSkillTemplate title="Languages" :elements="languages" />
  </div>
</template>

<script>
export default {
  data()  {
    return {
      languages: [
        {name: "java", icon:"mdi-language-java", color:"red", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Python", list: ["Flask", "Django", "FastAPI", "Jinja2"], year:2016, desc: "Python is nice"},
        {name: "HTML/css/js", list: ["Vue", "React", "Angular"], year:2016, desc: "HTML is nice"},
        {name: "Elixir", list: ["Phoenix"], year:2020, desc: "Elixir is nice"},
        {name: "F#", list: [], year:2020, desc: "F# is epic"},
        {name: "php", list: ["Laravel"], year:2020, desc: "F# is epic"},
      ],
    }
  }


};
</script>
