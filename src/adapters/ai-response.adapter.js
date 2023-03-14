function AIAdapter(resAI) {
  const resList = resAI.choices[0].text.split('\n')

  const filterList = resList.filter(color => {
    return color.indexOf("#") === 0
  })

  if(filterList.length === 3) {

    const dataAdapter = filterList.map(color => {
      const [hex, name] = color.split('-')
      return {hex: hex.trim(), name: name.trim()}
    } )

    return dataAdapter

  } else {
    return 'Server error.'
  }

  console.log(filterList)
  return 'ok'
}

export default AIAdapter;