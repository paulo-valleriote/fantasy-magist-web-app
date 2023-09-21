export default function CharacterCard() {
  const character = {
    name: 'Jane Doe',
    characteristics: {
      height: '1.8m',
      weight: '78kg',
      race: 'Tiefling',
      class: 'Bard 3'
    }
  }

  return (
    <div className="grid grid-rows-2 bg-black w-2/3 ">
      <div className="flex place-content-center items-center shadow-3xl-inner rounded-t-lg shadow-red-500">Character Image</div>
      <div className="flex flex-col bg-gray-600 text-white p-2 gap-2 rounded-b-lg">
        <h3 className="font-bold">Character Name</h3>
        <div className="flex flex-wrap gap-4">
          {Object.entries(character.characteristics).map(characteristicsPair => (
            <div className="flex flex-col" key={character.name}>
              <span className="text-xs opacity-75">{characteristicsPair[0]}</span>
              <span className="text-md">{characteristicsPair[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}