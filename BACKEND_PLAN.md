# BACKEND PLAN

## 1. Backend Overview

### Project

**Zubair.dev — Personal Developer Portfolio**

### Backend Role

The backend is **optional for V1**.

The portfolio is primarily a frontend-driven website. A backend should only exist where it provides real value, mainly:

* Contact form processing
* Server-side validation
* Spam protection
* Rate limiting
* Email delivery
* Health monitoring
* Future extensibility

The backend must not be introduced simply to make the project appear more complex.

### Recommended Stack

| Layer             | Technology                                    |
| ----------------- | --------------------------------------------- |
| Language          | Python 3.11+                                  |
| Framework         | FastAPI                                       |
| Validation        | Pydantic                                      |
| Server            | Uvicorn                                       |
| Configuration     | Environment variables                         |
| Database V1       | None                                          |
| Email             | Provider-agnostic transactional email service |
| Testing           | Pytest                                        |
| API Documentation | FastAPI OpenAPI                               |
| Deployment        | HTTPS-enabled backend platform                |

---

# 2. Backend Architecture

The backend follows a small modular architecture.

```text
backend/
├── app/
│   ├── main.py
│   ├── config.py
│   │
│   ├── api/
│   │   └── routes/
│   │       ├── health.py
│   │       └── contact.py
│   │
│   ├── schemas/
│   │   └── contact.py
│   │
│   ├── services/
│   │   ├── email.py
│   │   └── spam.py
│   │
│   ├── middleware/
│   │   └── security.py
│   │
│   └── core/
│       └── rate_limit.py
│
├── tests/
│   ├── test_health.py
│   └── test_contact.py
│
├── pyproject.toml
├── .env.example
└── README.md
```

The architecture should remain small until there is an actual requirement for additional modules.

---

# 3. API Endpoints

## 3.1 Health Check

### Endpoint

```text
GET /api/health
```

### Purpose

Used to verify that the API is running correctly.

### Successful Response

```json
{
  "status": "ok"
}
```

The endpoint must not expose:

* Environment variables
* Secret values
* Internal file paths
* Database credentials
* Stack traces
* Infrastructure details

---

# 4. Contact API

## 4.1 Submit Contact Message

### Endpoint

```text
POST /api/contact
```

### Request

```json
{
  "name": "Zubair",
  "email": "visitor@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a web application project."
}
```

### Validation

#### Name

* Required
* Minimum: 1 character
* Maximum: 100 characters

#### Email

* Required
* Must be a valid email format
* Maximum length should be restricted

#### Subject

* Optional or required depending on final frontend design
* Maximum: 150 characters

#### Message

* Required
* Minimum: 10 characters
* Maximum: 5000 characters

The backend must perform validation even when the frontend already validates the fields.

Frontend validation improves UX.

Backend validation provides security and reliability.

---

# 5. Contact Response

Successful submission:

```json
{
  "success": true,
  "message": "Your message has been sent successfully."
}
```

The response should not reveal internal email-provider information.

For failures, use safe generic messages.

Example:

```json
{
  "success": false,
  "message": "Unable to send your message right now. Please try again."
}
```

The API must not return raw exception messages to visitors.

---

# 6. Contact Submission Flow

```text
Visitor
   ↓
Contact Form
   ↓
Frontend Validation
   ↓
POST /api/contact
   ↓
CORS Validation
   ↓
Pydantic Validation
   ↓
Spam Protection
   ↓
Rate Limit Check
   ↓
Email Service
   ↓
Success / Failure Response
   ↓
Frontend Success/Error State
```

The backend should handle the submission as a single controlled workflow.

---

# 7. Email Service

The email implementation must be separated from the API route.

Example:

```text
contact.py
    ↓
email.py
    ↓
Email Provider
```

The API route should not contain provider-specific email logic.

This allows the email provider to be replaced later without rewriting the contact API.

### Required configuration

```text
EMAIL_API_KEY
EMAIL_FROM
EMAIL_TO
```

These values must exist only on the backend.

They must never be exposed in:

* React source code
* Vite public environment variables
* Browser network responses
* GitHub repository

---

# 8. Spam Protection

The contact form should have lightweight protection from the beginning.

## 8.1 Honeypot

Include a hidden field that normal users do not interact with.

If a bot fills the field:

```text
Reject submission
```

The frontend should not visually expose this field.

## 8.2 Minimum Submission Interval

Prevent repeated submissions from the same client within an extremely short period.

## 8.3 Rate Limiting

The endpoint should have a reasonable request limit.

Example concept:

```text
POST /api/contact
→ limited requests per IP within a time window
```

The exact production limit should be configurable through environment variables.

For a single backend instance, a lightweight in-memory limiter is acceptable.

If the backend later becomes multi-instance, rate limiting should move to a shared system or infrastructure-level solution.

---

# 9. CORS

The backend must only accept requests from approved frontend origins.

Example:

```text
https://zubair.dev
https://www.zubair.dev
```

Development origins may also be configured when needed.

The backend must not use unrestricted production CORS such as:

```text
*
```

especially when credentials or authenticated requests are introduced in the future.

Allowed origins should come from environment configuration.

Example:

```text
ALLOWED_ORIGINS=https://zubair.dev,https://www.zubair.dev
```

---

# 10. Security Requirements

The backend must follow basic production security practices.

### Required

* HTTPS in production
* Strict CORS
* Server-side validation
* Request size limits
* Rate limiting
* Spam protection
* Safe error handling
* Environment-based secrets
* No secret values in Git
* No unnecessary PII logging
* Secure response headers where appropriate
* Dependency updates
* Production debug mode disabled

### The backend must never expose:

```text
API keys
Email credentials
Environment variables
Internal paths
Stack traces
Infrastructure secrets
```

---

# 11. Security Headers

Where appropriate, the backend/deployment layer should provide security headers such as:

```text
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
X-Frame-Options: DENY
```

The final header configuration must be checked against the frontend hosting platform so that headers are not duplicated or configured inconsistently.

---

# 12. Trusted Hosts

Production deployments should restrict accepted hosts where the deployment environment supports it.

Example:

```text
zubair.dev
www.zubair.dev
```

Development environments may allow localhost.

This prevents unexpected host-header usage.

---

# 13. Error Handling

The API must use controlled error handling.

### Validation Error

Return an appropriate HTTP 4xx response.

### Rate Limit

Return:

```text
429 Too Many Requests
```

### Server Error

Return:

```text
500 Internal Server Error
```

with a generic user-safe message.

The actual exception may be logged server-side without exposing sensitive information to the visitor.

---

# 14. Logging

Logging should be useful but minimal.

### Log

* Request method
* Endpoint
* Response status
* Request duration
* General error information
* Operational events

### Do not log unnecessarily

* Full contact messages
* Passwords
* API keys
* Authentication tokens
* Sensitive personal information

The goal is debugging without creating an unnecessary personal-data store.

---

# 15. Database Decision

## V1: No Database

A database is **not required** for the initial portfolio.

The contact form can send messages directly to the configured email destination.

This keeps the system:

* Easier to build
* Easier to deploy
* Cheaper
* Easier to maintain
* Less exposed to security risks
* Less likely to become unnecessarily complicated

### Future Database

PostgreSQL may be introduced later if there is a real requirement for:

* Contact message history
* Admin dashboard
* Project/content management
* Analytics data
* Blog/CMS functionality

Database implementation must not be added simply for portfolio complexity.

---

# 16. Configuration

Use environment variables.

Example `.env.example`:

```env
APP_ENV=development

ALLOWED_ORIGINS=http://localhost:5173

EMAIL_API_KEY=
EMAIL_FROM=
EMAIL_TO=

RATE_LIMIT_WINDOW_SECONDS=60
RATE_LIMIT_MAX_REQUESTS=5
```

The actual `.env` file must never be committed.

The repository should contain:

```text
.env.example
```

but not:

```text
.env
```

---

# 17. Frontend ↔ Backend Integration

Development:

```text
React/Vite
http://localhost:5173
        ↓
FastAPI
http://localhost:8000
```

Production:

```text
zubair.dev
    ↓
Frontend
    ↓
HTTPS API
    ↓
FastAPI Backend
    ↓
Email Service
```

The frontend must use a centralized API configuration rather than hardcoding API URLs throughout components.

Example concept:

```text
VITE_API_BASE_URL
```

Only public configuration may exist in Vite environment variables.

No secret should ever use a `VITE_` variable.

---

# 18. Contact Form UX States

The frontend must support these backend-related states:

```text
Default
  ↓
Editing
  ↓
Validation Error
  ↓
Submitting
  ↓
Success
```

Failure branch:

```text
Submitting
  ↓
API Error
  ↓
Retry / Direct Email Fallback
```

The submit button must prevent accidental duplicate submissions while a request is active.

---

# 19. API Testing

The backend must have automated tests for the critical functionality.

## Health

```text
GET /api/health
→ returns 200
→ returns expected status
```

## Contact

Test:

* Valid submission
* Missing name
* Invalid email
* Empty message
* Message below minimum length
* Message above maximum length
* Subject above maximum length
* Invalid payload
* Honeypot submission
* Rate-limit behavior
* Email service failure
* Safe error response

## CORS

Test that:

* Approved origins work
* Unexpected origins are rejected appropriately

---

# 20. Test Strategy

Backend testing should prioritize behavior rather than implementation details.

### Unit Tests

Test:

* Validation
* Spam checks
* Rate-limit logic
* Email-service behavior

### API Tests

Test:

* HTTP status codes
* Request validation
* Response structure
* Error handling

The backend should pass its test suite before production deployment.

---

# 21. API Documentation

FastAPI's automatically generated OpenAPI documentation can be used during development.

Development documentation:

```text
/docs
```

and:

```text
/redoc
```

Production exposure should be evaluated based on the final deployment/security requirements.

If public API documentation is unnecessary, production access may be restricted or disabled.

---

# 22. Deployment Architecture

Recommended initial architecture:

```text
                 ┌─────────────────┐
                 │    Visitor      │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │   Zubair.dev    │
                 │ React + Vite    │
                 └────────┬────────┘
                          │
                    HTTPS API
                          │
                          ▼
                 ┌─────────────────┐
                 │    FastAPI      │
                 │    Backend      │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Email Provider  │
                 └─────────────────┘
```

The exact hosting provider can be selected later based on free-tier availability, reliability, deployment requirements, and project constraints.

The architecture must remain provider-independent.

---

# 23. Production Environment

Before deployment:

* Set production environment variables
* Configure production CORS
* Enable HTTPS
* Disable debug mode
* Verify health endpoint
* Test contact submission
* Test invalid submissions
* Test rate limiting
* Verify email delivery
* Check logs
* Confirm no secrets are committed
* Confirm frontend uses production API URL

---

# 24. Git Security

Before every push:

```text
.env
*.env
secrets
API keys
private credentials
```

must be excluded from Git.

`.gitignore` should include appropriate environment and generated files.

The repository should contain:

```text
.env.example
```

for setup documentation.

If a secret is accidentally committed, simply deleting it from the latest commit is not enough. The credential must also be rotated/revoked.

---

# 25. Backend Scope — V1

### Included

* FastAPI
* Health endpoint
* Contact endpoint
* Pydantic validation
* CORS
* Rate limiting
* Honeypot spam protection
* Email service abstraction
* Safe error handling
* Environment configuration
* Automated tests
* Production-ready structure

### Not Included

* User authentication
* Admin dashboard
* PostgreSQL
* Payments
* Chat system
* AI chatbot
* CMS
* Complex analytics
* WebSockets
* Microservices
* Redis unless genuinely required

---

# 26. Future Expansion

The backend can later evolve into:

```text
V1
Portfolio + Contact API
        ↓
V2
PostgreSQL + Message Storage
        ↓
V3
Admin Dashboard
        ↓
V4
CMS / Blog
        ↓
V5
Advanced Analytics / Integrations
```

Each addition should be based on an actual product requirement.

---

# 27. Backend Definition of Done

The backend is complete when:

* FastAPI starts successfully
* `/api/health` works
* `/api/contact` works
* Server-side validation works
* Invalid requests are rejected
* Spam protection works
* Rate limiting works
* CORS is correctly configured
* Email delivery works
* Secrets are stored only in environment variables
* Errors do not expose internals
* Automated tests pass
* No unnecessary database exists
* Production HTTPS works
* Frontend can successfully communicate with the API
* No sensitive data is accidentally committed
* Deployment documentation is available

---

# 28. Final Backend Principle

The backend for Zubair.dev should be **small, secure, useful, and extensible**.

It should not become a demonstration of how many technologies can be added to a portfolio.

The objective is simple:

> **Use the backend where it solves a real problem, keep V1 lightweight, and leave a clean path for future growth.**
