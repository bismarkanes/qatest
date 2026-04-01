import React, { useState } from 'react'

const TagComponent = function () {
    const [tags, setTags] = useState([]);
    const [inputTag, setInputTag] = useState("")

    const handleChange = function (event) {
        let newInputTag = event.target.value
        setInputTag(newInputTag)
    }

    const handleSubmit = function (event) {
        event.preventDefault()
        let newTags = [...tags]
        newTags.push(inputTag)
        setTags(newTags)
    }

    return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="radio" name="inputTag" value={inputTag} />
            {tags.map(tag => {
                return (
                    <>
                      <p data={tag}>tag</p>
                    </>
                )
            })}
          </form>
        </div>
    )
}

// Main App
export default function App() {
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState("")

  const handleChange = function (event) {
    let newInputTag = event.target.value
    setInputTag(newInputTag)
  }

  const handleSubmit = function (event) {
    event.preventDefault()
    let newTags = [...tags]
    newTags.push(inputTag)
    setTags(newTags)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="radio" name="inputTag" value={inputTag} />
        {tags.map(tag => {
          return (
            <>
              <p data={tag}>tag</p>
            </>
          )
        })}
      </form>
    </div>
  )
}
