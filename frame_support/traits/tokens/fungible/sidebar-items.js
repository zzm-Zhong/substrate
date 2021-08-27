initSidebarItems({"struct":[["Imbalance","An imbalance in the system, representing a divergence of recorded token supply from the sum of the balances of all accounts. This is `must_use` in order to ensure it gets handled (placing into an account, settling from an account or altering the supply)."],["ItemOf","Convert a `fungibles` trait implementation into a `fungible` trait implementation by identifying a single item."]],"trait":[["Balanced","A fungible token class where any creation and deletion of tokens is semi-explicit and where the total supply is maintained automatically."],["BalancedHold","Trait for slashing a fungible asset which can be reserved."],["HandleImbalanceDrop","Handler for when an imbalance gets dropped. This could handle either a credit (negative) or debt (positive) imbalance."],["Inspect","Trait for providing balance-inspection access to a fungible asset."],["InspectHold","Trait for inspecting a fungible asset which can be reserved."],["Mutate","Trait for providing an ERC-20 style fungible asset."],["MutateHold","Trait for mutating a fungible asset which can be reserved."],["Transfer","Trait for providing a fungible asset which can only be transferred."],["Unbalanced","A fungible token class where the balance can be set arbitrarily."]],"type":[["CreditOf","Imbalance implying that the total_issuance value is greater than the sum of all account balances."],["DebtOf","Imbalance implying that the total_issuance value is less than the sum of all account balances."]]});