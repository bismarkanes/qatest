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

    const handleRemove = function (event) {
      let tagValue = event.target.getAttribute('data-id')
      let indexTagValue = tags.indexOf(tag)
      if (indexTagValue != -1) {
        let newTags = [...tags];
        newTags.splice(indexTagValue, 1)
        setTags(newTags)
      }
    }

    return (
        <div className="app">
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="radio" name="inputTag" value={inputTag} />
            {tags.map(tag => {
                return (
                    <>
                      <p onClick={handleRemove} data-id={tag}>tag</p>
                    </>
                )
            })}
          </form>
        </div>
    )
}

// Main App
export default function App() {
  return (
    <div className="app">
      <TagComponent />
    </div>
  )
}
