<template>
  <div>
    <CvSkillTemplate title="Tools" :elements="languages" />
  </div>
</template>

<script>
export default {
  data()  {
    return {
      languages: [
        {name: "SQL", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Docker", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "aws", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Splunk", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Datadog", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
        {name: "Sentry", list: ["Micronaut", "Spring"], year:2018, desc: "Java is nice"},
      ],
    }
  }


};
</script>
