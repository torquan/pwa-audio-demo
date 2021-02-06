import React from "react"

const audio = require("../audio.mp3")

export default function  IndexPage() {
  return (
    <div>
        <audio controls>
                <source src="audio" type="audio/mpeg" />
                    Your browser does not support the audio tag.
        </audio>
        <p>Music: https://www.bensound.com</p>

    </div>
  )
}

