function settings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Saved Rolls</Text>}>
        <AdditiveList
          settingsKey="savedRolls"
          addAction={
            <TextInput
              label="+ Add new roll"
              placeholder="<name>,<roll>"
            />
          }
        />
      </Section>
    </Page>
  )
}

registerSettingsPage(settings)
