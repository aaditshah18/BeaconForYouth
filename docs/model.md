# Object Model

``` mermaid
---
Object Model for SafeHarbourYouth
---
classDiagram
    class User {
        +String userId
        +String password
    }

    class Admin {
        +String userId
        +String password
        ListAllNGOs()
        ListAllComplaints()
        ApproveNGO()
        AddRemoveNGO()
    }

    class NGO {
        +String name
        +String userId
        +String password
        +String location
        +String certificate
        Register()
        Login()
        ViewComplaint()
        UpdateComplaintStatus()
        DecideAction()
    }

    class Youth {
        +FileComplaint()
        +ViewComplaintStatus()
    }

    Admin --|> User : Inherits
    NGO --|> User : Inherits

    class UserType {
        <<enumeration>>
        Admin
        NGO
        Youth
    }

    class LoginScreen {
        +String userId
        +String password
        Login()
    }

    class RegistrationScreen {
        +String name
        +String userId
        +String password
        +String location
        +String certificate
        RequestAdminApproval()
    }

    class Complaint {
        +String details
        +String status
        File()
        UpdateStatus()
    }

    class Dashboard {
        ViewDetails()
    }

    class AdminDashboard {
        ListAllNGOs()
        ListAllComplaints()
        ApproveNGO()
    }

    class NGODashboard {
        ViewComplaints()
        UpdateComplaintStatus()
        DecideAction()
    }

    AdminDashboard --|> Dashboard : Inherits
    NGODashboard --|> Dashboard : Inherits

    Youth "1" -- "0..*" Complaint : Files > 
    NGO "1" -- "0..*" Complaint : Views > 
    Admin "1" -- "0..*" NGO : Approves >





```