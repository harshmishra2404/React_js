import React from 'react'
import Card03 from './components03/Card03'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://thumbs.dreamstime.com/z/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks to go",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$55/hr",
      location: "Mumbai, India",
      job_title: "Backend Developer"
    },
    {
      brandLogo: "https://cdn.dribbble.com/userupload/29828185/file/original-5bcab5b55efba8f8486479f1d72a3106.png",
      companyName: "Microsoft",
      datePosted: "1 week to go",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "California, USA",
      job_title: "Full Stack Developer"
    },
    {
      brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      companyName: "Meta",
      datePosted: "3 days to go",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Mumbai, India",
      job_title: "UI/UX Designer"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/netflix-logo-netflix-icon-free-free-vector.jpg",
      companyName: "Netflix",
      datePosted: "10 days to go",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
      job_title: "Product Designer"
    },
    {
      brandLogo: "https://cdn.vectorstock.com/i/1000v/63/03/apple-logo-icon-vector-26936303.jpg",
      companyName: "Apple",
      datePosted: "4 weeks to go",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
      job_title: "Mobile App Developer"
    },
    {
      brandLogo: "https://www.logoai.com/uploads/articles/2024/03/05/17096195246566834.jpg",
      companyName: "Tesla",
      datePosted: "6 days to go",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Mumbai, India",
      job_title: "DevOps Engineer"
    },
    {
      brandLogo: "https://img.freepik.com/premium-vector/adobe-illustrator-logo-design_765850-36.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Adobe",
      datePosted: "8 days to go",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Mumbai, India",
      job_title: "Graphic Designer"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small_2x/uber-transparent-icon-free-png.png",
      companyName: "Uber",
      datePosted: "2 days to go",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hr",
      location: "Mumbai, India",
      job_title: "Data Analyst"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
      companyName: "Airbnb",
      datePosted: "3 weeks to go",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$48/hr",
      location: "Mumbai, India",
      job_title: "Software Tester"
    }
  ];

  console.log(jobOpenings)

  return (
    <div>
      <div className="parent">
        {jobOpenings.map(function (elem,idx) {
          return <div key={idx}>
            <Card03 company={elem.companyName} logo={elem.brandLogo} wages={elem.pay} Location={elem.location} Posting_date={elem.datePosted} job_time={elem.tag1} posting_level={elem.tag2} job_title={elem.job_title} />
          </div>
        })}
      </div>
    </div>
  )
}

export default App
