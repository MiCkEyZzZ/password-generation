import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public length = 0
  public includeLetters = false
  public includeNumbers = false
  public includeSymbols = false
  public password = ''

  public onChangeLength(event: Event) {
    const val: string = (event.target as HTMLInputElement).value
    const parsedValue = parseInt(val)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }

    return this.length
  }

  public onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  public onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  public onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  public onButtonClick() {
    let validChars = ''
    let generatePassword = ''
    const numbers = '1234567890'
    const letters = 'абвгджзиклмнопрстуфчцшщъыьэюя'
    const symbols = '!@#$%^&*()'

    if (this.includeLetters) {
      validChars += letters
    }

    if (this.includeNumbers) {
      validChars += numbers
    }

    if (this.includeSymbols) {
      validChars += symbols
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatePassword += validChars[index]
    }

    return this.password = generatePassword
  }
}
