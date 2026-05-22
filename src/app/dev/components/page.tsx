"use client";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";


import { useState } from "react";


function TestPage() {
  const [firstName, setFirstName] = useState("");

  return (
    <div>
      <div className="py-10">
        <h1 className="text-display">Components</h1>
      </div>
      <div className="py-5">
        <Button
          variant="primary"
          type="submit"
          onClick={() => console.log("klikket")}
        >
          Start vask ➜
        </Button>
      </div>
      <div className="py-5">
        <Input
          type="text"
          name="user_first_name"
          placeholder="Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="py-5">
        <Card />
      </div>
    </div>
  );
}

export default TestPage;
