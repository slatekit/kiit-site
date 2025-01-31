
# Encrypt

<table class="table table-striped table-bordered">
  <tbody>
    <tr>
      <td><strong>summary</strong></td>
      <td>Encryption using AES</td>
    </tr>
      <td><strong>jar</strong></td>
      <td>kiit.common.jar</td>
    </tr>
    <tr>
      <td><strong>namespace</strong></td>
      <td>kiit.common.encrypt</td>
    </tr>
    <tr>
      <td><strong>artifact</strong></td>
      <td><a href="https://github.com/orgs/slatekit/packages?q=dev.kiit.kiit-common">dev.kiit:kiit-common</a></td>
    </tr>
    <tr>
      <td><strong>sources</strong></td>
      <td><a href="https://github.com/slatekit/kiit/tree/main/src/common/common/src/main/kotlin/kiit/common/crypto" class="url-ch">src/common/common/src/main/kotlin/kiit/common/crypto</a></td>
    </tr>
    <tr>
      <td><strong>example</strong></td>
      <td><a href="https://github.com/slatekit/slatekit/tree/master/src/lib/kotlin/slatekit-examples/src/main/kotlin/slatekit/examples/Example_Encryptor.kt" class="url-ch">src/lib/kotlin/slate-examples/src/main/kotlin/slatekit/examples/Example_Encryptor.kt</a></td>
    </tr>
    <tr>
      <td><strong>dependency</strong></td>
      <td> kiit-results</td>
    </tr>
  </tbody>
</table>
{{% break %}}

## Gradle
{{% sk-install name="kiit-common" %}}
{{% break %}}

## Import
{{< highlight kotlin >}}
  
 // required 
 import kiit.common.encrypt.Encryptor
 import kiit.common.utils.B64Java8
 
 
 // optional 
 import kiit.results.Try
 import kiit.results.Success
  
{{< /highlight >}}
{{% break %}}

## Setup
{{< highlight kotlin >}}



  // SETUP 1: Create your singleton encryptor that can encrypt/decrypt using your custom key/secret.
  // and use it as a singleton.
  object TestEncryptor : Encryptor("wejklhviuxywehjk", "3214maslkdf03292", B64Java8)


  // SETUP 2: Create an instance encryptor
  val encryptor = Encryptor("wejklhviuxywehjk", "3214maslkdf03292", B64Java8)

  


{{< /highlight >}}
{{% break %}}

## Usage
{{< highlight kotlin >}}


    // CASE 1: Encrypt using AES ( text is base64 encoded without newlines )
    val input = "basMoAKSKDFJrd789"
    val encrypted = TestEncryptor.encrypt(input)
    println(encrypted)


    // CASE 2: Decrypt using AES
    val decrypted = TestEncryptor.decrypt(encrypted)
    println(decrypted)


    // CASE 3: Ensure decrypted matches original
    println(input == decrypted)


    // CASE 4: Use the EncryptSupportIn trait to have built in encrypt/decrypt methods
    // NOTE: You just have to have an _enc member field
    println( encryptor.encrypt(input))
    println( encryptor.decrypt(encrypted) )
    

{{< /highlight >}}
{{% break %}}

