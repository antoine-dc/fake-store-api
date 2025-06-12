import LoginForm from "../../components/LoginForm.js";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex-grow flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
}
