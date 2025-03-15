CREATE TABLE [tbl_user] (
  [userID] bigint PRIMARY KEY,
  [email] varcahr(50),
  [password] varcahr(50),
  [pin] int,
  [userRoleID] int
)
GO

CREATE TABLE [tbl_user_role] (
  [userRoleID] int PRIMARY KEY,
  [userRoleTitle] varchar(50)
)
GO

CREATE TABLE [tbl_user_personal_info] (
  [userPersonalInfoID] bigint PRIMARY KEY,
  [userID] bigint,
  [fatherName] varchar(50),
  [cnic] varchar(15),
  [phoneNumber] varchar(15),
  [dateOfBirth] date,
  [country] varchar(15),
  [city] varchar(15),
  [language] varchar(15),
  [religion] varchar(15),
  [eDoc] varchar(50)
)
GO

CREATE TABLE [tbl_user_education] (
  [userEducationID] bigint PRIMARY KEY,
  [userID] bigint,
  [institutationName] varchar(50),
  [degree] varchar(50),
  [eDoc] varchar(50),
  [educationTypeID] int
)
GO

CREATE TABLE [tbl_education_type] (
  [educationTypeID] int PRIMARY KEY,
  [educationTypeTitle] varchar(50)
)
GO

CREATE TABLE [tbl_user_experience] (
  [userExperienceID] bigint PRIMARY KEY,
  [userID] bigint,
  [field] varchar(50),
  [duration] varchar(50),
  [instituteName] varchar(50)
)
GO

CREATE TABLE [tbl_user_certification] (
  [userCertificationID] bigint PRIMARY KEY,
  [userID] bigint,
  [courseName] varchar(50),
  [duration] varchar(50),
  [instituteName] varchar(50)
)
GO

CREATE TABLE [tbl_user_interest] (
  [userInterestID] bigint PRIMARY KEY,
  [userID] bigint,
  [preferedCareer] varchar(50)
)
GO

CREATE TABLE [tbl_user_hobbies] (
  [userHobbyID] bigint PRIMARY KEY,
  [userID] bigint,
  [hobbyID] int
)
GO

CREATE TABLE [tbl_hobbies] (
  [hobbyID] bigint PRIMARY KEY,
  [hobbyTitle] varchar(50)
)
GO

CREATE TABLE [tbl_jobs] (
  [jobID] bigint PRIMARY KEY,
  [postedBy] bigint,
  [jobName] nvarchar(255),
  [jobType] nvarchar(255),
  [location] nvarchar(255),
  [postingDate] date,
  [requirement] nvarchar(255),
  [description] nvarchar(255)
)
GO

CREATE TABLE [tbl_job_application] (
  [applicationID] bigint PRIMARY KEY,
  [jobId] bigint,
  [userId] bigint,
  [appliedDate] date
)
GO

CREATE TABLE [tbl_favourite_jobs] (
  [favouriteID] bigint PRIMARY KEY,
  [jobId] bigint,
  [userId] bigint
)
GO

CREATE TABLE [tbl_blogs] (
  [blogID] bigint PRIMARY KEY,
  [postedBy] bigint,
  [heading] nvarchar(255),
  [description] nvarchar(255),
  [publishDate] date
)
GO

CREATE TABLE [tbl_trainings] (
  [trainingID] bigint PRIMARY KEY,
  [postedBY] bigint,
  [category] nvarchar(255),
  [description] nvarchar(255)
)
GO

ALTER TABLE [tbl_user] ADD FOREIGN KEY ([userRoleID]) REFERENCES [tbl_user_role] ([userRoleID])
GO

ALTER TABLE [tbl_user_personal_info] ADD FOREIGN KEY ([userID]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_user_education] ADD FOREIGN KEY ([userID]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_user_education] ADD FOREIGN KEY ([educationTypeID]) REFERENCES [tbl_education_type] ([educationTypeID])
GO

ALTER TABLE [tbl_user_experience] ADD FOREIGN KEY ([userID]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_user_certification] ADD FOREIGN KEY ([userID]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_user_interest] ADD FOREIGN KEY ([userID]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_user_hobbies] ADD FOREIGN KEY ([userID]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_user_hobbies] ADD FOREIGN KEY ([hobbyID]) REFERENCES [tbl_hobbies] ([hobbyID])
GO

ALTER TABLE [tbl_jobs] ADD FOREIGN KEY ([postedBy]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_job_application] ADD FOREIGN KEY ([jobId]) REFERENCES [tbl_jobs] ([jobID])
GO

ALTER TABLE [tbl_job_application] ADD FOREIGN KEY ([userId]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_favourite_jobs] ADD FOREIGN KEY ([jobId]) REFERENCES [tbl_jobs] ([jobID])
GO

ALTER TABLE [tbl_favourite_jobs] ADD FOREIGN KEY ([userId]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_blogs] ADD FOREIGN KEY ([postedBy]) REFERENCES [tbl_user] ([userID])
GO

ALTER TABLE [tbl_trainings] ADD FOREIGN KEY ([postedBY]) REFERENCES [tbl_user] ([userID])
GO
