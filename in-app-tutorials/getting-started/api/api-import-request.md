## Import Test Requests

Expand each section to view its details. 

> Tip: With API/Web Service project type, you can click on the icons on the menu bar. 

<details><summary>Import RESTful requests from OpenAPI Specification 3.0</summary>

> You need a Katalon Studio Enterprise license.

To import a service definition with OpenAPI 3.0, please do as follows:

1. Open or create a project then import the service definition in two ways:

* With a API/Web Service project type, click on the OpenAPI icon and select the **Import OpenAPI 3** option; or

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-openapi30/icon.png" width=56%>

* In **Tests Explorer**, right-click on any folder of **Object Repository** and select **Import > From OpenAPI 3**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-openapi30/rightclick.png" width=70%>

3. In the displayed dialog, browse your **OpenAPI 3.0** local file or enter an OpenAPI 3 URL, and click **OK**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-openapi30/browse.png" width=70%>

</details>

<details><summary>Import RESTful requests from OpenAPI 2.0 (Swagger)</summary>

1. Open or create a project then import the service definition in two ways:

* With a API/Web Service project type, click on the OpenAPI icon and select the **Import OpenAPI 2 (Swagger)** option; or

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-rest-requests-from-swagger-20/import.png" width=56%>

* In **Tests Explorer**, right-click on any folder of **Object Repository** and select **Import > From OpenAPI 2 (Swagger)**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-rest-requests-from-swagger-20/import-via-object.png" width=70%>

3. In the displayed dialog, browse your **Swagger** local file or enter an OpenAPI 2 (Swagger) URL, and click **OK**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-rest-requests-from-swagger-20/browse.png" width=70%>

</details>

<details><summary>Import RESTful requests from Postman</summary>
   
To import test requests from Postman, please do as folows:

1. Export your Postman collection to JSON. See the instruction [here](https://learning.getpostman.com/docs/postman/collections/data_formats/#exporting-and-importing-postman-data). 

2. In Katalon Studio, with an API/Web Service project, click on the Postman icon

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-postman/postman.png" width=100%>

3. In the displayed dialog, browse your exported Postman local file and click **OK**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-postman/browser.png" width=100%>

The corresponding test requests will be imported into folder Postman.

</details>

<details><summary>Import RESTful requests from SoapUI</summary>

1. Open or create a project then

* Click on the **Import Rest Services from SoapUI** icon (only available for API/Web Service project type); or

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soapui/icon.png">

* In **Tests Explorer**, right-click on any folder of **Object Repository** and select **Import > From SoapUI**

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soapui/rightclick.png">

3. In the displayed dialog, browse to your **SoapUI** project and click **OK**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soapui/browse.png">

</details>

<details><summary>Import RESTful requests from WADL</summary>

You can use an example WADL Description provided [here](https://www.w3.org/Submission/wadl/#x3-40001.3).

1. Open or create a project then import the service definition in two ways:

* With a API/Web Service project type, click on the **Import WADL** icon; or

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-wadl/icon.png" width=302>

* In **Tests Explorer**, right-click on any folder of **Object Repository** and select **Import > From WADL**

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-wadl/rightclick.png" width=589>

2. In the displayed dialog, browse your **WADL** local file and click **OK**.

   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-wadl/browse.png" width=399>

</details>

<details><summary>Import SOAP requests from WSDL</summary>

To import a WSDL file to your project, please do as follows:

1. In **Tests Explorer**, right-click on any folder of **Object Repository**
2. Select **Import > From WSDL**
   <img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soap-requests-from-wsdl/import-wsdl-rightclick.png" width=512 >

3. In the **URL** field of the **Import WSDL** dialog, specify either a remote WSDL URL or a path of a local WSDL file (e.g., [http://www.dneonline.com/calculator.asmx?WSDL](http://www.dneonline.com/calculator.asmx?WSDL)).
4. Click **OK**. Katalon Studio loads the file and generates SOAP request objects.

If you have created an **API/Web Service** project, click on the **Import WSDL** icon on the main toolbar to display the **Import WSDL** dialog in step 3.

<img src="https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/import-soap-requests-from-wsdl/import-wsdl-icon.png" width=412 >

</details>

