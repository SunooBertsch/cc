Frontend challenge for Self Decode.

The application has been completed per the user requirements.
Due to the limited scope of the project, additional requirements were unnecessary.
Validation has been implemented in terms of data types, but aside from that no further validation was necessary.

Selecting a buy or sell block will open the popup menu to transact the selected currency. Values are updated in realtime across all components, and transactions which would cause the user to spend more cash than they have available is not possible and will trigger an alert.

The admin panel controls all necessary rates, including refresh rate of currency values. Exchange rates are stochastically altered if the API returns identical values to it's previous call. 

All initial values for inventory and rates are held in the config file within the src folder.



